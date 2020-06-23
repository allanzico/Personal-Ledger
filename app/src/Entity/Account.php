<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
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
     * @Assert\NotBlank(message="Account title is required")
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $accountTitle;

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
            'total_transactions' => count($this->getLedgers())
        ];
    }
}
