import {MigrationInterface, QueryRunner} from "typeorm";

export class textCol1732239983416 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "customFieldsLinkedaccounts"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "customFieldsLinkedaccounts" text`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "customFieldsLinkedaccounts"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "customFieldsLinkedaccounts" character varying(255)`, undefined);
   }

}
