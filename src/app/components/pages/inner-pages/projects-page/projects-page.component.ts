import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

    constructor() {
    }

    modelisation!: {
        name: string;
        description: string;
        link: string;
        image: string;
        technologie: string;
        duree: string;
        client: string;
        uid: string;
        type: string;
        categorie: string
    }[];

    length_modelisation!: number;

    ngOnInit(): void {
        this.modelisation = [
            {
                name: "Fanny 3D",
                description: "Personnage en 3D représentant les couleurs et valeurs de la nouvelle femme congolaise.",
                link: "https://youtu.be/Q-B7Cvgp5c0",
                image: "assets/images/next-project/fany-3d.png",
                technologie: "Blender",
                duree: "5 mois",
                client: "Cultur'Art",
                uid: "blender-fany-3D",
                type: "tab4",
                categorie: "Sculpture 3D"
            },

            {
                name: "Réamenagement Pont GCM",
                description: "Projet de réamenagement du Pont de GCM réliant le quartier Gécamines à la cité TSHANSASA",
                link: "https://youtu.be/OG9woGF3nnw",
                image: "assets/images/next-project/pont-gcm.png",
                technologie: "Sketchup - Cinema 4D",
                duree: "2 mois",
                client: "Gouvernement Provincial Haut-Katanga",
                uid: "reamenagement-gcm",
                type: "tab4",
                categorie: "Modélisation 3D"
            },

            {
                name: "Ordination Salesienne",
                description: "Ordination diaconale et sacerdotale des salésiens de Don Bosco",
                link: "https://youtu.be/qEmKDL6-GTc",
                image: "assets/images/next-project/consecration-salesienne.png",
                technologie: "Caméra - After Effect - Premiere Pro",
                duree: "1 semaine",
                client: "Communauté Salesienne - AFC",
                uid: "ordination-salesienne",
                type: "tab2",
                categorie: "Vidéographie"
            },

            {
                name: "DRC Mining Week 2023",
                description: "Résumé du DRC Mining Week édition 2023",
                link: "https://youtu.be/GBCM8Js_3Hw",
                image: "assets/images/next-project/drc-mining-week.png",
                technologie: "Caméra - After Effect - Premiere Pro",
                duree: "3 jours",
                client: "Duanaco Import-Export",
                uid: "drc-mining-week-2023",
                type: "tab2",
                categorie: "Vidéographie"
            },

            {
                name: "Institut Technique Salama 2022",
                description: "Présentation de l'Institut Technique Salama Don Bosco et ses différentes options organisées.",
                link: "https://youtu.be/UEV24QbDXmI",
                image: "assets/images/next-project/institut-technique-salama.png",
                technologie: "Communication - Vidéographie",
                duree: "2 jours",
                client: "I.T. Salama",
                uid: "institut-technique-salama-2022",
                type: "tab6",
                categorie: "Communication"
            },

            {
                name: "Shisha Nyama 2K22",
                description: "SHISHA Nyama est un evénement annuel organisé par OZA WAPi réunissant la population de la ville de Lubumbashi.",
                link: "https://www.instagram.com/p/Cg_d2B6jYvB/",
                image: "assets/images/next-project/shisha-nyama-2k22.png",
                technologie: "Communication - Graphisme",
                duree: "Immédiat",
                client: "OZA WAPI",
                uid: "shisha-nyama-2k22",
                type: "tab3",
                categorie: "Graphisme"
            },

            {
                name: "Website Afrihopes",
                description: "Afrihopes Global D.R.C est une entreprise qui offre des services variés tels que la facilitation pour l'obtention de visa, la logistique, l'import-export.",
                link: "https://wwww.afrihopes.com",
                image: "assets/images/next-project/afrihopes-global.png",
                technologie: "Programmation - Communication",
                duree: "2 Semaines",
                client: "Afrihopes Global DRC",
                uid: "afrihopes-global",
                type: "tab5",
                categorie: "Programmation"
            },

            {
                name: "TITANIC 2023",
                description: "TITANIC est un evénement annuel organisé par Cinho Event ayant pour but la promotion culturelle de la ville de Lubumbashi.",
                link: "https://www.instagram.com/p/CgCtzs9DHDL/",
                image: "assets/images/next-project/titanic-event-2023.png",
                technologie: "Communication - Graphisme",
                duree: "Immédiat",
                client: "Cinho Event",
                uid: "titanic-event-2023",
                type: "tab6",
                categorie: "Communication"
            },

            {
                name: "ESIS Inscription 2022-2023 - Graphisme",
                description: "Campagne d'inscription des nouveaux étudiants pour la licence et le master.",
                link: "https://web.facebook.com/703976019787320/photos/pb.100064531795188.-2207520000./2028169477367961/?type=3",
                image: "assets/images/next-project/esis-salama-2022.png",
                technologie: "Communication - Graphisme",
                duree: "Immédiat",
                client: "ESIS Salama",
                uid: "esis-salama-2022",
                type: "tab3",
                categorie: "Graphisme"
            },

            {
                name: "ESIS Inscription 2022-2023",
                description: "Vidéo de la campagne d'inscription des nouveaux étudiants pour la licence et le master.",
                link: "https://youtu.be/H-XwxY06Bqs",
                image: "assets/images/next-project/esis-salama-2022.png",
                technologie: "Communication - Graphisme",
                duree: "Immédiat",
                client: "ESIS Salama",
                uid: "esis-salama-2022",
                type: "tab2",
                categorie: "Graphisme"
            },

            {
                name: "Le Sommet",
                description: "Le sommet est un programme d'accompagnement et de financement des jeunes entrepreneurs congolais.",
                link: "https://www.instagram.com/p/CucjWe7IG8l/",
                image: "assets/images/next-project/le-parrain-sommet.png",
                technologie: "Communication - Graphisme",
                duree: "Immédiat",
                client: "Le Parrain",
                uid: "le-parrain-sommet",
                type: "tab3",
                categorie: "Graphisme"
            },

            {
                name: "Ordination Sacerdotale Salesienne",
                description: "Ordination diaconale et sacerdotale des salésiens de Don Bosco",
                link: "https://www.youtube.com/watch?v=ohheKcWJF38",
                image: "assets/images/next-project/consecration-salesienne.png",
                technologie: "Vidéographie",
                duree: "Immédiat",
                client: "Communauté Salesienne - AFC",
                uid: "ordination-sacerdotale",
                type: "tab7",
                categorie: "Couverture Live"
            },

            {
                name: "Google I/O Extended Lubumbashi 2023",
                description: "Google I/O Extended is the community led counterpart to Google I/O, our annual Google led conference where the world hears about Google’s latest developer solutions, products, and technology.",
                link: "https://www.youtube.com/watch?v=FGi-4kBgRRw",
                image: "assets/images/next-project/google-io-extended-lubumbashi-2023.png",
                technologie: "Vidéographie",
                duree: "Immédiat",
                client: "GDG Lubumbashi",
                uid: "google-io-extended-lubumbashi-2023",
                type: "tab7",
                categorie: "Couverture Live"
            },

            {
                name: "Journée Scientifique 2023",
                description: "Conférence sur Les Technologies de la Quatrième révolution Industrielle pour le Développement durable.",
                link: "https://youtube.com/live/WvL9gL-NFuo?feature=share",
                image: "assets/images/next-project/journee-scientifique-2023.png",
                technologie: "Vidéographie",
                duree: "Immédiat",
                client: "ESIS Salama",
                uid: "journee-scientifique-2023",
                type: "tab7",
                categorie: "Couverture Live"
            },

            {
                name: "Afro Pictures 01",
                description: "photographie1",
                link: "https://www.instagram.com/p/CBNpL3jDndQ/",
                image: "assets/images/next-project/photographie-1.png",
                technologie: "Photographie",
                duree: "Immédiat",
                client: "ESIS Salama",
                uid: "journee-scientifique-2023",
                type: "tab8",
                categorie: "Photographie"
            },

            {
                name: "A Browskin 02",
                description: "photographie1",
                link: "https://www.instagram.com/p/CAD6yVsDio8/",
                image: "assets/images/next-project/photographie-2.png",
                technologie: "Photographie",
                duree: "Immédiat",
                client: "ESIS Salama",
                uid: "journee-scientifique-2023",
                type: "tab8",
                categorie: "Photographie"
            },

            {
                name: "Afro Model 03",
                description: "photographie1",
                link: "https://www.instagram.com/p/B8vFs6KjvKk/",
                image: "assets/images/next-project/photographie-3.png",
                technologie: "Photographie",
                duree: "Immédiat",
                client: "ESIS Salama",
                uid: "journee-scientifique-2023",
                type: "tab8",
                categorie: "Photographie"
            },

            {
                name: "ESIS Inscription 2020-2021",
                description: "Publicité sur la campagne d'inscription de l'Ecole Supérieure d'Informatique Salama.",
                link: "https://youtu.be/A01G452EShg",
                image: "assets/images/next-project/esis-salama-2020.png",
                technologie: "Caméra - After Effect - Premiere Pro",
                duree: "1 semaine",
                client: "ESIS Salama",
                uid: "esis-salama-2020-2021",
                type: "tab2",
                categorie: "Vidéographie"
            },

            {
                name: "Appel Candidature ESIS 2020-2021",
                description: "Vidéo d'annonce pour l'appel à la candidature des nouveaux étudiants désirant réjoindre l'Esis Salama",
                link: "https://youtu.be/lJ2E2VTPZRw",
                image: "assets/images/next-project/appel-esis-salama-2020.png",
                technologie: "Caméra - After Effect - Premiere Pro",
                duree: "1 semaine",
                client: "ESIS Salama",
                uid: "esis-salama-2020-2021",
                type: "tab2",
                categorie: "Vidéographie"
            },

            {
                name: "ESIS Inscription 2021-2022",
                description: "Vidéo d'annonce pour l'appel à la candidature des nouveaux étudiants désirant réjoindre l'Esis Salama",
                link: "https://youtu.be/JFCEysQ5Mko",
                image: "assets/images/next-project/esis-salama-2021.png",
                technologie: "Caméra - After Effect - Premiere Pro",
                duree: "1 semaine",
                client: "ESIS Salama",
                uid: "esis-salama-2020-2021",
                type: "tab2",
                categorie: "Vidéographie"
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
