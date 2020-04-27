<?php

namespace App\Controller;

use App\Entity\Account;
use App\Entity\Ledger;
use App\Repository\LedgerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function dd;

class LedgerController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    /**
     * @var LedgerRepository
     */
    private $ledgerRepository;

    public function __construct(EntityManagerInterface $entityManager, LedgerRepository $ledgerRepository)
        {

            $this->entityManager = $entityManager;
            $this->ledgerRepository = $ledgerRepository;
        }

    /**
     * @Route("/ledger", name="ledger", methods={"GET"})
     */
    public function index()
    {
    return $this->getAll();
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
                ->setDebit($data['debit'])
                ->setCredit($data['credit'])
                ->setBalance($data['balance'])
                ->setTransactionDescription($data['transaction_description'])
                ->setAccount($this->entityManager->find(Account::class, $data['account']));
            $this->entityManager->persist($ledger);
            $this->entityManager->flush();

        return new JsonResponse($data);
    }

    //Get All Details
    public function getAll() {
        $dbLedgers = $this->ledgerRepository->getAll();
//        $response = [];
//        foreach ($dbLedgers as $dbLedger){
//            $response[] = $dbLedger->toArray();
//        }

        return new JsonResponse($dbLedgers);
    }
}
