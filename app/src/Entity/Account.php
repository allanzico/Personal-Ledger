<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AccountRepository")
 */
class Account
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $accountTitle;

    /**
     * @ORM\Column(type="float")
     */
    private $openingBalance;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ledger", mappedBy="account")
     */
    private $ledgers;

    public function __construct()
    {
        $this->ledgers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAccountTitle(): ?string
    {
        return $this->accountTitle;
    }

    public function setAccountTitle(string $accountTitle): self
    {
        $this->accountTitle = $accountTitle;

        return $this;
    }

    public function getOpeningBalance(): ?int
    {
        return $this->openingBalance;
    }

    public function setOpeningBalance(int $openingBalance): self
    {
        $this->openingBalance = $openingBalance;

        return $this;
    }

    /**
     * @return Collection|Ledger[]
     */
    public function getLedgers(): Collection
    {
        return $this->ledgers;
    }

    public function addLedger(Ledger $ledger): self
    {
        if (!$this->ledgers->contains($ledger)) {
            $this->ledgers[] = $ledger;
            $ledger->setAccount($this);
        }

        return $this;
    }

    public function removeLedger(Ledger $ledger): self
    {
        if ($this->ledgers->contains($ledger)) {
            $this->ledgers->removeElement($ledger);
            // set the owning side to null (unless already changed)
            if ($ledger->getAccount() === $this) {
                $ledger->setAccount(null);
            }
        }

        return $this;
    }

    public function toArray()
    {
        return [
            'id' => $this->getId(),
            'account_title' => $this->getAccountTitle(),
            'opening_balance' => $this->getOpeningBalance(),
            'total_transactions' => count($this->getLedgers())
        ];
    }
}
