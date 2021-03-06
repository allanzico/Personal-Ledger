<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200426115800 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE account CHANGE account_balance opening_balance DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE ledger CHANGE account_id account_id INT DEFAULT NULL, CHANGE transaction_description transaction_description VARCHAR(255) DEFAULT NULL, CHANGE debit debit DOUBLE PRECISION DEFAULT NULL, CHANGE credit credit DOUBLE PRECISION DEFAULT NULL, CHANGE balance balance DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE account CHANGE opening_balance account_balance DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE ledger CHANGE account_id account_id INT DEFAULT NULL, CHANGE transaction_description transaction_description VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE debit debit DOUBLE PRECISION DEFAULT \'NULL\', CHANGE credit credit DOUBLE PRECISION DEFAULT \'NULL\', CHANGE balance balance DOUBLE PRECISION DEFAULT \'NULL\'');
    }
}
