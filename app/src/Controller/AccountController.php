<?php

namespace App\Controller;

use App\Entity\Account;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function json_decode;

class AccountController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/account", name="account")
     */
    public function index()
    {
        return $this->render('account/index.html.twig', [
            'controller_name' => 'AccountController',
        ]);
    }

    /**
     * @Route("/account/create", name="create_account", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */

    public function createAccount(Request $request){
        $data = json_decode($request->getContent(), true);
        $account = new  Account();

        //Set Data

        $account->setAccountTitle($data['account_title'])
            ->setOpeningBalance($data['opening_balance']);

        $this->entityManager->persist($account);
        $this->entityManager->flush();

        return new JsonResponse($data);
    }

}
