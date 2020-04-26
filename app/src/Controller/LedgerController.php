<?php

namespace App\Controller;

use App\Entity\Account;
use App\Entity\Ledger;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LedgerController extends AbstractController
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
     * @Route("/ledger", name="ledger")
     */
    public function index()
    {
        return $this->render('ledger/index.html.twig', [
            'controller_name' => 'LedgerController',
        ]);
    }

    /**
     * @Route("/ledger/create", name="create_ledger", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */

    public function createLedger(Request $request){
        $data = json_decode($request->getContent(), true);
        $ledger = new  Ledger();

        //Set Data

        $ledger
            ->setDebit('debit')
            ->setCredit('credit')
            ->setBalance('balance')
            ->setTransactionDescription('transaction_description')
            ->setAccount($this->entityManager->find(Account::class, $data['account']));

        $this->entityManager->persist($ledger);
        $this->entityManager->flush();

        return new JsonResponse($data);
    }
}
