<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200427141032 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE ledger DROP balance, CHANGE account_id account_id INT DEFAULT NULL, CHANGE transaction_description transaction_description VARCHAR(255) DEFAULT NULL, CHANGE debit debit DOUBLE PRECISION DEFAULT NULL, CHANGE credit credit DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE ledger ADD balance DOUBLE PRECISION DEFAULT \'NULL\', CHANGE account_id account_id INT DEFAULT NULL, CHANGE transaction_description transaction_description VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE debit debit DOUBLE PRECISION DEFAULT \'NULL\', CHANGE credit credit DOUBLE PRECISION DEFAULT \'NULL\'');
    }
}
