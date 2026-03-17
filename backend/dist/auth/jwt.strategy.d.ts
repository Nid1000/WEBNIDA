declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: {
        id: number;
        email: string;
        tipo: 'usuario' | 'admin';
    }): {
        id: number;
        email: string;
        tipo: "usuario" | "admin";
    };
}
export {};
