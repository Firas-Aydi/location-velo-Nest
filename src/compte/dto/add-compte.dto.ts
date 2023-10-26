/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';

export class addCompteDto {
    prenom: string;
    nom: string;
    dateNaissance: Date;
    @IsEmail()
    email: string;
    telephone: number;
    role: string;
    @IsNotEmpty()
    password: string;
    isUser: boolean;
  }
  