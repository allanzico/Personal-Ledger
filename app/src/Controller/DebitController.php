<?php

namespace App\Controller;

use App\Entity\Account;
use App\Entity\Ledger;
use App\Form\DebitTFormType;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


use function dd;

class DebitController extends AbstractController
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
     * @Route("/api/debit", name="debit")
     */
    public function index()
    {
        return $this->render('debit/index.html.twig', [
            'controller_name' => 'DebitController',
        ]);
    }

    /**
     * Add an expense
     * @Route("/api/debit/create", name="debit_create_action")
     * @param Request $request
     * @return RedirectResponse|Response
     * @throws \Exception
     */

    public function createAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $ledger = new Ledger();
        $credit = $request->get('credit');

        if($credit == null){
            $ledger->setCredit(0)
                ->setDebit($data['debit'])
                ->setDate(new  DateTime($data['date']))
                ->setAccount($this->entityManager->find(Account::class, $data['account']))
                ->setTransactionDescription($data['transaction_description']);
            $this->entityManager->persist($ledger);
            $this->entityManager->flush();
            return new JsonResponse($data);
            }

    }
}
