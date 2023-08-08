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
        uid: string
    }[];

    length_modelisation! : number;

    ngOnInit(): void {
        this.modelisation = [
            {
                name: "Fanny 3D",
                description: "Personnage en 3D représentant les couleurs et valeurs de la nouvelle femme congolaise.",
                link: "",
                image : "assets/images/next-project/fany-3d.png",
                technologie : "Blender",
                duree : "5 mois",
                client: "Cultur'Art",
                uid: "blender-fany-3D"
            },

            {
                name: "Réamenagement Pont GCM",
                description: "Projet de réamenagement du Pont de GCM réliant le quartier Gécamines à la cité TSHANSASA",
                link: "",
                image : "assets/images/next-project/pont-gcm.png",
                technologie : "Sketchup - Cinema 4D",
                duree : "2 mois",
                client: "Gouvernement Provincial Haut-Katanga",
                uid: "reamenagement-gcm"
            }
        ];
        this.length_modelisation = this.modelisation.length;
    }

    // Tabs
    currentTab = 'tab4';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}