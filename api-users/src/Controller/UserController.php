<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class UserController extends AbstractController
{
    #[Route('/api/users', name: 'get_users', methods: ['GET'])]
    public function index(UserRepository $userRepository, SerializerInterface $serializer): JsonResponse
    {
        $data = $this->notFoundResponse();
        $location = null;
        $users = $userRepository->findAll();

        if ($users) {
            $data = [
                "message" => "users found",
                "status" => "ok",
                "data" => $users,
                "code" => Response::HTTP_OK
            ];
        }

        return $this->response($data, $serializer, $location);
    }

    #[Route('/api/user/{id}', name: 'get_user', methods: ['GET'])]

    public function getDetailUser(int $id, SerializerInterface $serializer, UserRepository $userRepository): JsonResponse
    {
        $data = $this->notFoundResponse();
        $location = null;
        $user = $userRepository->find($id);
        if ($user) {
            $data = [
                "message" => "user " . $user->getFirstname() . " found",
                "status" => "ok",
                "data" => $user,
                "code" => Response::HTTP_OK
            ];
        }

        return $this->response($data, $serializer, $location);
    }

    #[Route('/api/delete/user/{id}', name: 'delete_user', methods: ['DELETE'])]
    public function deleteUser(int $id, EntityManagerInterface $em, UserRepository $userRepository, SerializerInterface $serializer): JsonResponse
    {
        $data = $this->notFoundResponse();
        $location = null;
        $user = $userRepository->find($id);
        if ($user) {
            $em->remove($user);
            $em->flush();
            $data['code'] = Response::HTTP_NO_CONTENT;
        }
        return $this->response($data, $serializer, $location);
    }

    #[Route('/api/create', name: 'create_user', methods: ['POST'])]
    public function createUser(Request $resquest, SerializerInterface $serializer, EntityManagerInterface $em, UrlGeneratorInterface $urlGeneratorInterface): JsonResponse
    {
        $data = $this->notFoundResponse();
        $location = null;
        $user = $serializer->deserialize($resquest->getContent(), User::class, 'json');
        if ($user) {
            if (empty($user->getFirstname()) !== true && empty($user->getLastname()) !== true && empty($user->getEmail()) !== true && empty($user->getPassword()) != true) {
                $em->persist($user);
                $em->flush();
                $data = [
                    "status" => "ok",
                    "message" => "user " . $user->getFirstname() . " created",
                    "code" => Response::HTTP_CREATED,
                    "data" => $user
                ];
                $location = $urlGeneratorInterface->generate('get_user', ['id' => $user->getId()], UrlGeneratorInterface::ABSOLUTE_URL);
            } else {
                $data['message'] = "Bad Request";
                $data['code'] = Response::HTTP_BAD_REQUEST;
            }
        }

        return $this->response($data, $serializer, $location);
    }

    #[Route('/api/update/{id}', name: 'update_user', methods: ['PUT'])]

    public function updateUser(int $id, Request $request, SerializerInterface $serializer, EntityManagerInterface $em, UserRepository $userRepository, UrlGeneratorInterface $urlGeneratorInterface): JsonResponse
    {
        $data = $this->notFoundResponse();
        $location = null;
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        $userEntity = $userRepository->find($id);
        if ($user) {
            if (empty($user->getFirstname()) !== true && empty($user->getLastname()) !== true && empty($user->getEmail()) !== true && empty($user->getPassword()) != true) {
                if ($userEntity) {
                    $userEntity->setFirstname($user->getFirstname());
                    $userEntity->setLastname($user->getLastname());
                    $userEntity->setEmail($user->getEmail());
                    $userEntity->setPassword($user->getPassword());
                    $em->persist($userEntity);
                    $em->flush();
                    $data['code'] = Response::HTTP_NO_CONTENT;

                }
            }
        } else {
            $data['message'] = "Bad Request";
            $data['code'] = Response::HTTP_BAD_REQUEST;
        }
        return $this->response($data, $serializer, $location);
    }


    public function response($data, $serializer, $location): JsonResponse
    {
        $data_send = [
            'status' => $data['status'],
            'message' => $data['message'],
            'data' => $data['data']
        ];

        $json = $serializer->serialize($data_send, 'json');
        return new JsonResponse($json, $data['code'], ["Location" => $location], true);
    }

    public function notFoundResponse(): array
    {
        $data = [
            "message" => "ressource not found",
            "status" => "ko",
            "data" => null,
            "code" => Response::HTTP_NOT_FOUND
        ];

        return $data;
    }
}
