<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LedgerRepository")
 */
class Ledger
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $transactionDescription;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $debit;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $credit;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $balance;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Account", inversedBy="ledgers")
     */
    private $account;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTransactionDescription(): ?string
    {
        return $this->transactionDescription;
    }

    public function setTransactionDescription(?string $transactionDescription): self
    {
        $this->transactionDescription = $transactionDescription;

        return $this;
    }

    public function getDebit(): ?float
    {
        return $this->debit;
    }

    public function setDebit(?float $debit): self
    {
        $this->debit = $debit;

        return $this;
    }

    public function getCredit(): ?float
    {
        return $this->credit;
    }

    public function setCredit(?float $credit): self
    {
        $this->credit = $credit;

        return $this;
    }

    public function getBalance(): ?float
    {
        return $this->balance;
    }

    public function setBalance(?float $balance): self
    {
        $this->balance = $balance;

        return $this;
    }

    public function getAccount(): ?Account
    {
        return $this->account;
    }

    public function setAccount(?Account $account): self
    {
        $this->account = $account;

        return $this;
    }

    public function toArray() {
       return [
           'id' =>$this->getId(),
           'transaction_description' =>$this->getTransactionDescription(),
           'current_balance' => $this->getBalance(),
           'debit' => $this->getDebit(),
           'credit' => $this->getCredit(),
           'account' => [
               'id' =>$this->account->getId(),
               'account_title' => $this->account->getAccountTitle(),
               'opening_balance' => $this->account->getOpeningBalance()
           ]
       ];
    }
}
