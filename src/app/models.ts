export interface Persona{
    id: number;
    imageBanner: string;
    imageFotoPerfil: string;
    imageGithub: string;
    imageLinkedin: string;
    urlGithub: string;
    urlLinkedin: string;
    mail: string;
    nombreyApellido: string;
    descripcion: string;
}
export interface Educacion{
    id: number;
    tituloEdu: string;
    periodoEdu: string;
    institucionEdu: string;
    descripcionEdu: string;
}

export interface Experiencia{
    id: number;
    nombrePuesto: string;
    nombreLugar: string;
    descripcion: string;
    fechaInicio: string;
    fechaFinal: string;
    imageExp: string;
}

export interface Skill{
    id: number;
    porcentaje: string;
    nombreHabilidad: string;
}

export interface Proyecto{
    id: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    repoUrl: string;
}

export interface Credentials{
    email: string;
    password: string;
}