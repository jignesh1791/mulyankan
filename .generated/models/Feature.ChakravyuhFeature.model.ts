
/**
 * <auto-generated>
 *     This code was generated by a tool.
 *
 *     Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * </auto-generated>
 */ 

// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { Sitecore } from "./_.Sitecore.Override"
import { ChakravyuhFoundation } from "./Foundation.ChakravyuhFoundation.model"
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { ComponentRendering, RouteData, Field, ImageField, FileField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { DefaultComponentProps } from '@/lib/component-props';


export namespace ChakravyuhFeature.Fields {
    export type Banner = 
            ChakravyuhFoundation.Fields.Image & { 
        fields?: { 
            /**
            * Represents the Description field (d17a1ae8-fac7-4532-b4ff-a342654ee913).
            */
            Description: Field<string>;

            /**
            * Represents the Title field (b99b5aa6-e344-4e4d-a6cf-014c535875ec).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace ChakravyuhComponents.Fields {
    export type Carousel = 
            ChakravyuhFoundation.Fields.Title & 
            ChakravyuhFoundation.Fields.Image & { 
        fields?: { 
            /**
            * Represents the SliderCards field (d21134ac-75e9-4d4b-a04a-e6d8b6314d0b).
            */
            SliderCards: Sitecore.Override.ItemEx[];
 
        }
 }; 
}

export namespace ChakravyuhComponents.Cards.Fields {
    export type CarouselCard = 
            ChakravyuhFoundation.Fields.Title & 
            ChakravyuhFoundation.Fields.Image & { 
        fields?: { 
            /**
            * Represents the CTA field (10cedf5e-d8a1-4859-b065-e15623f94b73).
            */
            CTA: LinkField;

            /**
            * Represents the SubText field (ee577bfb-83e1-4bae-b6db-cfd0da64d699).
            */
            SubText: Field<string>;
 
        }
 }; 
}

export namespace ChakravyuhFeature.Fields {
    export type Coach = 
            ChakravyuhFoundation.Fields.Name & 
            ChakravyuhFoundation.Fields.Image & { 
        fields?: { 
            /**
            * Represents the Team field (dc071675-b24f-41c1-9f34-b5f79863a164).
            */
            Team?: Sitecore.Override.ItemEx;

            /**
            * Represents the Type field (4ca7a3e1-bd78-49cc-870c-3f2a47d9efc8).
            */
            Type?: Sitecore.Override.ItemEx;
 
        }
 }; 
}

export namespace ChakravyuhFeature.Fields {
    export type Comments = { 
        fields?: { 
            /**
            * Represents the CommentItemId field (7540322a-6e47-47dc-9c14-3742ac20a62e).
            */
            CommentItemId: Field<string>;

            /**
            * Represents the Description field (ba6a5c1e-8803-4abf-a7f5-2b658fb47aa3).
            */
            Description: Field<string>;

            /**
            * Represents the Name field (8f03c249-4f5e-4324-8196-839029aa3f53).
            */
            Name: Field<string>;
 
        }
 }; 
}

export namespace ChakravyuhComponents.Footer.Fields {
    export type FooterComponent = { 
        fields?: { 
            /**
            * Represents the CopyrightText field (7dd25a2c-4082-46ae-959a-746aaeb45985).
            */
            CopyrightText: Field<string>;

            /**
            * Represents the FooterLogo field (476c2f5f-3b81-4b32-80cf-8ed46034b556).
            */
            FooterLogo: ImageField;

            /**
            * Represents the FooterNavigationLink field (67a74b64-73f6-4912-b944-37a8eb6ff647).
            */
            FooterNavigationLink: Sitecore.Override.ItemEx[];
 
        }
 }; 
}

export namespace ChakravyuhComponents.Header.Fields {
    export type HeaderComponent = { 
        fields?: { 
            /**
            * Represents the HeaderNavigationLinks field (cba2c147-813c-4b91-a237-a747cbe956df).
            */
            HeaderNavigationLinks: Sitecore.Override.ItemEx[];

            /**
            * Represents the LogoImage field (d8371cda-1991-4dec-b182-c4d82a6c5fe5).
            */
            LogoImage: ImageField;
 
        }
 }; 
}

export namespace ChakravyuhFeature.Fields {
    export type NavigationLink = { 
        fields?: { 
            /**
            * Represents the LinkField field (7b145c51-64c5-4840-8335-80fded7a85e5).
            */
            LinkField: LinkField;
 
        }
 }; 
}

export namespace ChakravyuhFeature.Fields {
    export type Players = 
            ChakravyuhFoundation.Fields.Name & 
            ChakravyuhFoundation.Fields.Image & 
            ChakravyuhFoundation.Fields.Title & { 
        fields?: { 
            /**
            * Represents the Age field (055bf2d3-6240-4de8-9811-66dc60a0f32c).
            */
            Age: Field<number>;

            /**
            * Represents the Average field (2a6a0f82-ff31-4852-ab9e-9e4208264c70).
            */
            Average: Field<number>;

            /**
            * Represents the Batting Style field (c68bf20f-778c-41db-9d5c-0f12b4de785e).
            */
            BattingStyle: Field<string>;

            /**
            * Represents the Bowling Style field (d3150b88-bd34-4317-9ca7-d9673f48625b).
            */
            BowlingStyle: Field<string>;

            /**
            * Represents the Captain field (8333a898-5914-4aad-9676-4786764edff5).
            */
            Captain: Field<string>;

            /**
            * Represents the Date of Birth field (05e7e6c9-16d6-4e1c-a6c8-30474aa16612).
            */
            Dob: Field<string>;

            /**
            * Represents the Fiftys field (866e5e3c-430b-4a62-a8bb-438317d304e6).
            */
            Fiftys: Sitecore.Override.ItemEx[];

            /**
            * Represents the Highest Score field (80518b5f-b8f0-461e-b75a-2b42a680da86).
            */
            HighestScore: Field<string>;

            /**
            * Represents the 100s field (baa093db-991b-4e10-8923-cc4a55c92b6e).
            */
            Hundreds: Sitecore.Override.ItemEx[];

            /**
            * Represents the HundredsInNumber field (69ad4f8f-765e-4678-a58c-a596793cf94b).
            */
            HundredsInNumber: Field<number>;

            /**
            * Represents the Team field (ed042aa0-70f0-4e81-a839-10ee176a62c5).
            */
            Team?: Sitecore.Override.ItemEx;

            /**
            * Represents the Total Fours field (7aee46b5-d6ac-4eba-a8c6-c2ffca8b234c).
            */
            TotalFours: Field<string>;

            /**
            * Represents the Total Matches Played field (c8381abf-5606-42f4-9cd4-915a9f50349a).
            */
            TotalMatchesPlayed: Field<string>;

            /**
            * Represents the Total Runs Scored field (3dc2c1e5-227e-4511-8494-50f23ebdecdc).
            */
            TotalRunsScored: Field<string>;

            /**
            * Represents the Total Sixes field (04584bf0-1be4-4e1b-b536-6a92d34d360e).
            */
            TotalSixes: Field<string>;

            /**
            * Represents the Total Wickets field (f68a0764-1f4a-43cd-ada3-51c70429fa3e).
            */
            TotalWickets: Sitecore.Override.ItemEx[];

            /**
            * Represents the TotalWicketsInNumber field (54809b4c-aa04-4ef8-9853-0daf8a8bbae3).
            */
            TotalWicketsInNumber: Field<number>;

            /**
            * Represents the Type field (168f2a48-5327-40d6-8808-4f97fcf8ffcf).
            */
            Type?: Sitecore.Override.ItemEx;

            /**
            * Represents the WicketKeeper field (27d442b2-6b8d-41be-adb2-7b23e9d34451).
            */
            WicketKeeper: Field<string>;
 
        }
 }; 
}

export namespace ChakravyuhFeature.Fields {
    export type Search = { 
        fields?: { 
            /**
            * Represents the NumberOfCenturies field (e1ac27c9-bbf7-49c0-a491-ad624d095139).
            */
            NumberOfCenturies: Sitecore.Override.ItemEx[];

            /**
            * Represents the NumberOfCenturiesFilterText field (f1ef20cb-7089-41de-b9b2-7eca8401bed2).
            */
            NumberOfCenturiesFilterText: Field<string>;

            /**
            * Represents the NumberOfWickets field (e1accf36-d4f9-4718-8683-7bc2d5d8d717).
            */
            NumberOfWickets: Sitecore.Override.ItemEx[];

            /**
            * Represents the NumberOfWicketsFilterText field (a83a42b7-881a-4c1c-a6af-fd57451ae752).
            */
            NumberOfWicketsFilterText: Field<string>;

            /**
            * Represents the PlayerType field (eb3d506f-8acb-42b7-8511-7faf3b1c48c9).
            */
            PlayerType: Sitecore.Override.ItemEx[];

            /**
            * Represents the PlayerTypeFilterText field (da2cd163-bd49-4037-b174-4c29d516b01e).
            */
            PlayerTypeFilterText: Field<string>;

            /**
            * Represents the Teams field (84915306-05fb-4462-8b42-2ded425509bd).
            */
            Teams: Sitecore.Override.ItemEx[];

            /**
            * Represents the TeamsFilterText field (66546dc8-5d6d-4adf-90b1-189c45a82d8a).
            */
            TeamsFilterText: Field<string>;
 
        }
 }; 
}

export namespace ChakravyuhFeature.Fields {
    export type Teams = 
            ChakravyuhFoundation.Fields.Title & 
            ChakravyuhFoundation.Fields.Image & { 
        fields?: { 
            /**
            * Represents the Coach field (2d805e6e-5c29-477e-8fca-c46f0def8555).
            */
            Coach: Sitecore.Override.ItemEx[];

            /**
            * Represents the Players field (282e6802-4215-40df-ae77-6f6500763095).
            */
            Players: Sitecore.Override.ItemEx[];

            /**
            * Represents the World Cup Wins field (b4510911-4423-4659-9c9b-2b759bf907e3).
            */
            WorldCupWins: Field<number>;
 
        }
 }; 
}

export namespace ChakravyuhComponents.TwoColumn.Fields {
    export type TwoColumnDataFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ChakravyuhComponents.TwoColumn.Fields {
    export type TwoColumnWithText = { 
        fields?: { 
            /**
            * Represents the CTA field (63321c62-50e6-4ce4-9e48-bbd918ebb23c).
            */
            CTA: LinkField;

            /**
            * Represents the mediaImage field (5b6aadb3-f116-4039-939d-7b9be66b2e3b).
            */
            mediaImage: ImageField;

            /**
            * Represents the subHeading field (fcbc2f6c-8d0e-442d-88bb-6f5466296e05).
            */
            subHeading: Field<string>;

            /**
            * Represents the titleText field (a2b39fc0-daa1-4bae-aad1-3772c70d2734).
            */
            titleText: Field<string>;
 
        }
 }; 
}

export namespace ChakravyuhComponents.Fields {
    export type Widgets = { 
        fields?: {  
        }
 }; 
}


