<?php

namespace App\Controller;

use App\Form\CreditFormType;
use App\Form\DebitTFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/credit", name="credit")
     */
    public function index()
    {
        return $this->render('credit/index.html.twig', [
            'controller_name' => 'CreditController',
        ]);
    }

    /**
     * Add an income
     * @Route("/credit/create", name="credit_create_action")
     * @param Request $request
     * @return RedirectResponse|Response
     */

    public function createAction(Request $request){

        //Create and render debit form
        $form = $this->createForm(CreditFormType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $ledger = $form->getData();
            $debit = $form['debit']->getData();
            if ($debit == null) {
                $ledger->setDebit(0);
            }
            $this->entityManager->persist($ledger);
            $this->entityManager->flush();

            return $this->redirectToRoute('ledger');
        }

        return $this->render('credit/create.html.twig',
            ['creditForm' =>$form->createView()]);
    }
}
