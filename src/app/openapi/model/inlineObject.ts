/**
 * CTVMua API
 * API danh cho quan ly cong tac vien mua.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: huynhnhon.dev@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface InlineObject { 
    uid: string;
    new_role: InlineObject.NewRoleEnum;
}
export namespace InlineObject {
    export type NewRoleEnum = 'quanlyCTVmua' | 'nguoimoi';
    export const NewRoleEnum = {
        QuanlyCTVmua: 'quanlyCTVmua' as NewRoleEnum,
        Nguoimoi: 'nguoimoi' as NewRoleEnum
    };
}

