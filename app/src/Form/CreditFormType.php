<?php

namespace App\Form;

use App\Entity\Account;
use App\Entity\Ledger;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CreditFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('transactionDescription')
            ->add('credit')
            ->add('debit', HiddenType::class, [
                'required' => false,
            ])
            ->add('account', EntityType::class,[
                'class' => Account::class,
                'choice_label' => 'account_title'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Ledger::class,
        ]);
    }
}
