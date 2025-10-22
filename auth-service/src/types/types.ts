import { Request, Response } from "express";

export interface AuthContext {
    req: Request;
    res: Response;
    user?: AuthUser | null;
    loaders?: Record<string, unknown>;
}

export interface AuthUser {
    id: string;
    email: string;
    role?: string;
}