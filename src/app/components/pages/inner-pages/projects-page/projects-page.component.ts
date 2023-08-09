import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

    constructor() { }

    modelisation!: { 
        name: string; 
        description: string;
        link: string; 
        image : string;
        technologie: string;
        duree : string;
        client: string;
        uid: string;
        type: string;
        categorie: string
    }[];

    length_modelisation! : number;

    ngOnInit(): void {
        this.modelisation = [
            {
                name: "Fanny 3D",
                description: "Personnage en 3D représentant les couleurs et valeurs de la nouvelle femme congolaise.",
                link: "https://youtu.be/Q-B7Cvgp5c0",
                image : "assets/images/next-project/fany-3d.png",
                technologie : "Blender",
                duree : "5 mois",
                client: "Cultur'Art",
                uid: "blender-fany-3D",
                type: "tab4",
                categorie: "Sculpture 3D"
            },

            {
                name: "Réamenagement Pont GCM",
                description: "Projet de réamenagement du Pont de GCM réliant le quartier Gécamines à la cité TSHANSASA",
                link: "https://youtu.be/OG9woGF3nnw",
                image : "assets/images/next-project/pont-gcm.png",
                technologie : "Sketchup - Cinema 4D",
                duree : "2 mois",
                client: "Gouvernement Provincial Haut-Katanga",
                uid: "reamenagement-gcm",
                type: "tab4",
                categorie: "Modélisation 3D"
            },

            {
                name: "Ordination Salesienne",
                description: "Ordination diaconale et sacerdotale des salésiens de Don Bosco",
                link: "https://youtu.be/qEmKDL6-GTc",
                image : "assets/images/next-project/consecration-salesienne.png",
                technologie : "Caméra - After Effect - Premiere Pro",
                duree : "1 semaine",
                client: "Communauté Salesienne - AFC",
                uid: "ordination-salesienne",
                type: "tab2",
                categorie: "Vidéographie"
            },

            {
                name: "DRC Mining Week 2023",
                description: "Résumé du DRC Mining Week édition 2023",
                link: "https://youtu.be/GBCM8Js_3Hw",
                image : "assets/images/next-project/drc-mining-week.png",
                technologie : "Caméra - After Effect - Premiere Pro",
                duree : "3 jours",
                client: "Duanaco Import-Export",
                uid: "drc-mining-week-2023",
                type: "tab2",
                categorie: "Vidéographie"
            },

            {
                name: "Institut Technique Salama 2022",
                description: "Présentation de l'Institut Technique Salama Don Bosco et ses différentes options organisées.",
                link: "https://youtu.be/UEV24QbDXmI",
                image : "assets/images/next-project/institut-technique-salama.png",
                technologie : "Communication - Vidéographie",
                duree : "2 jours",
                client: "I.T. Salama",
                uid: "institut-technique-salama-2022",
                type: "tab6",
                categorie: "Communication"
            },
        ];

        this.length_modelisation = this.modelisation.length;

    }

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}