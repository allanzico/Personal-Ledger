<?php

namespace App\Repository;

use App\Entity\Ledger;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\DBALException;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Ledger|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ledger|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ledger[]    findAll()
 * @method Ledger[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LedgerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ledger::class);
    }

    /**
     * @return mixed[] Returns ledger details with balance
     * @throws DBALException
     */

    public function getAll()
    {
        $sql = "SELECT  account.account_title, l.id, transaction_description, debit, credit, @balance := @balance + l.credit - l.debit AS balance 
                FROM 
                (SELECT @balance := 0) AS initial, account 
                CROSS JOIN
                ledger AS  l    
          
            ";

        $em = $this->getEntityManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    /**
     * @param $id
     * @return mixed[] Find by id
     * @throws DBALException
     */
    public function findByAccountId($id)
    {
        $sql = "SELECT  a.account_title, a.id, account_id, transaction_description, debit, credit, @balance := @balance + credit - debit AS balance 
                FROM 
                (SELECT @balance := 0) AS initial, ledger 
                CROSS JOIN
                account AS  a    
                 WHERE ledger.account_id = $id
                 AND a.id = ledger.account_id
                  
          
            ";

        $em = $this->getEntityManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function findAllByDoctrine()
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.id IS NOT NULL')
            ->orderBy('l.id', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
