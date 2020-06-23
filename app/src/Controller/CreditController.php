<?php

namespace App\Controller;

use App\Entity\Account;
use App\Entity\Ledger;
use App\Form\CreditFormType;
use App\Form\DebitTFormType;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\VarDumper\Cloner\Data;
use function json_decode;

class CreditController extends AbstractController
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
     * @Route("/api/credit", name="credit")
     */
    public function index()
    {
        return $this->render('credit/index.html.twig', [
            'controller_name' => 'CreditController',
        ]);
    }

    /**
     * Add an income
     * @Route("/api/credit/create", name="credit_create_action")
     * @param Request $request
     * @return RedirectResponse|Response
     * @throws \Exception
     */

    public function createAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $ledger = new Ledger();
        $debit = $request->get('debit');

        if($debit == null){
            $ledger->setDebit(0)
                ->setCredit($data['credit'])
                ->setDate(new DateTime($data['date']))
                ->setAccount($this->entityManager->find(Account::class, $data['account']))
                ->setTransactionDescription($data['transaction_description']);
            $this->entityManager->persist($ledger);
            $this->entityManager->flush();
            return new JsonResponse($data);
            }
    }

}
