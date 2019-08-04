<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190804172131 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX UNIQ_957A647992FC23A8');
        $this->addSql('DROP INDEX UNIQ_957A6479A0D96FBF');
        $this->addSql('CREATE TEMPORARY TABLE __temp__fos_user AS SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles FROM fos_user');
        $this->addSql('DROP TABLE fos_user');
        $this->addSql('CREATE TABLE fos_user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, enabled BOOLEAN NOT NULL, password VARCHAR(255) NOT NULL COLLATE BINARY, last_login DATETIME DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, username VARCHAR(180) NOT NULL, username_canonical VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, email_canonical VARCHAR(180) NOT NULL, salt VARCHAR(255) DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL, roles CLOB NOT NULL --(DC2Type:array)
        )');
        $this->addSql('INSERT INTO fos_user (id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles) SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles FROM __temp__fos_user');
        $this->addSql('DROP TABLE __temp__fos_user');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A647992FC23A8 ON fos_user (username_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A6479A0D96FBF ON fos_user (email_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A6479C05FB297 ON fos_user (confirmation_token)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX UNIQ_957A647992FC23A8');
        $this->addSql('DROP INDEX UNIQ_957A6479A0D96FBF');
        $this->addSql('DROP INDEX UNIQ_957A6479C05FB297');
        $this->addSql('CREATE TEMPORARY TABLE __temp__fos_user AS SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles FROM fos_user');
        $this->addSql('DROP TABLE fos_user');
        $this->addSql('CREATE TABLE fos_user (id INTEGER PRIMARY KEY AUTOINCREMENT DEFAULT NULL, enabled BOOLEAN NOT NULL, password VARCHAR(255) NOT NULL, last_login DATETIME DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, username VARCHAR(255) NOT NULL COLLATE BINARY, username_canonical VARCHAR(255) NOT NULL COLLATE BINARY, email VARCHAR(255) NOT NULL COLLATE BINARY, email_canonical VARCHAR(255) NOT NULL COLLATE BINARY, salt VARCHAR(255) NOT NULL COLLATE BINARY, confirmation_token VARCHAR(255) DEFAULT NULL COLLATE BINARY, roles CLOB NOT NULL COLLATE BINARY, locked BOOLEAN DEFAULT \'0\', expired BOOLEAN DEFAULT \'0\', expires_at DATETIME DEFAULT NULL, credentials_expired BOOLEAN DEFAULT \'0\', credentials_expire_at DATETIME DEFAULT NULL)');
        $this->addSql('INSERT INTO fos_user (id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles) SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles FROM __temp__fos_user');
        $this->addSql('DROP TABLE __temp__fos_user');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A647992FC23A8 ON fos_user (username_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A6479A0D96FBF ON fos_user (email_canonical)');
    }
}
