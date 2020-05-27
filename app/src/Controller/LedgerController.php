<?php

namespace App\Controller;

use App\Entity\Account;
use App\Entity\Ledger;
use App\Form\DebitTFormType;
use App\Repository\LedgerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
     * @Route("/api/ledger", name="ledger", methods={"GET"})
     */
    public function index()
    {
        $dbLedgers = $this->ledgerRepository->getAll();
        return new JsonResponse($dbLedgers);
    }




}
