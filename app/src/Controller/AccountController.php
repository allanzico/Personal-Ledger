<?php

namespace App\Controller;

use App\Entity\Account;
use App\Repository\AccountRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;



class AccountController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    private $accountRepository;

    public function __construct(EntityManagerInterface $entityManager, AccountRepository $accountRepository)
    {
        $this->entityManager = $entityManager;
        $this->accountRepository = $accountRepository;
    }

    /**
     * @Route("/api/account", name="account", methods={"GET"})
     */
    public function indexAction()
    {
        return $this->getAllAccounts();
    }

    /**
     * @Route("api/account/create", name="account_create_account", methods={"POST"})
     * @param Request $request
     * @return void
     */

    public function createAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $account = new  Account();

        //Set Data
        $account->setAccountTitle($data['account_title']);
        $this->entityManager->persist($account);
        $this->entityManager->flush();
    }

    /**
     * @Route("/api/account/delete/{account}", name="delete_account", methods={"DELETE"})
     * @param Account $account
     * @return void
     */

    public function deleteAction(Account $account)
    {

        if ($account) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($account);
            $entityManager->flush();
        }
    }

    //Convert accounts to Json
    public function getAllAccounts()
    {
        $dbAccounts = $this->accountRepository->findAllByNewest();
        $response = [];

        foreach ($dbAccounts as $dbAccount) {
            $response[] = $dbAccount->toArray();
        }
        return new JsonResponse($response);
    }
}
