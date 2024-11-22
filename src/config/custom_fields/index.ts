import { CustomFields, LanguageCode } from "@vendure/core";

export const customFields: CustomFields={
    Customer:[
       { 
            name: "linkedAccounts",
            type: "text",
            nullable: true,
            readonly: true,
            label:[{
                languageCode: LanguageCode.en,
                value: "Linked accounts"
            }],
            ui: {component: 'json-editor-form-input'},
        }
    ]
}