<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        for($i=0; $i<10; $i++){
            $user = new User();
            $user->setFirstname('firstname'.$i+1);
            $user->setLastname('lastname'.$i+1);
            $user->setEmail('mail@mail.fr'.$i+1);
            $user->setPassword('password'.$i+1);
            $manager->persist($user);
        }
        $manager->flush();
    }
}
