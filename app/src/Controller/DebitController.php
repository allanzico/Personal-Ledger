<?php

namespace App\Controller;

use App\Form\DebitTFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
     */

    public function createAction(Request $request)
    {

        //Create and render debit form
        $form = $this->createForm(DebitTFormType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $ledger = $form->getData();
            $credit = $form['credit']->getData();
            if ($credit == null) {
                $ledger->setCredit(0);
            }
            $this->entityManager->persist($ledger);
            $this->entityManager->flush();

            return $this->redirectToRoute('ledger');
        }

        return $this->render(
            'debit/create.html.twig',
            ['debitForm' => $form->createView()]
        );
    }
}
