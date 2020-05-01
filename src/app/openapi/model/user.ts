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


export interface User { 
    email: string;
    displayName: string;
    photoURL?: string;
    uid: string;
    role: User.RoleEnum;
}
export namespace User {
    export type RoleEnum = 'kigui' | 'muaho';
    export const RoleEnum = {
        Kigui: 'kigui' as RoleEnum,
        Muaho: 'muaho' as RoleEnum
    };
}

