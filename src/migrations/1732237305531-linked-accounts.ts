import {MigrationInterface, QueryRunner} from "typeorm";

export class linkedAccounts1732237305531 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "customFieldsLinkedaccounts" character varying(255)`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "customFieldsLinkedaccounts"`, undefined);
   }

}
