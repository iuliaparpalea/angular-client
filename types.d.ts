declare namespace Definitions {
    export interface AnyDependents {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface BusinessRoles {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface DebtTypes {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface EducationLevel {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface Genders {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface MaritalStatus {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface Model0 {
        ResidencyStatus?: ResidencyStatus[];
        MaritalStatus?: MaritalStatus[];
        AnyDependents?: AnyDependents[];
        Genders?: Genders[];
        EducationLevel?: EducationLevel[];
        States?: States[];
        TimeAtThisAddress?: TimeAtThisAddress[];
        OccupiedStatus?: OccupiedStatus[];
        Titles?: Titles[];
        DebtTypes?: DebtTypes[];
        BusinessRoles?: BusinessRoles[];
        TimeInCountry?: TimeInCountry[];
    }
    export interface OccupiedStatus {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface ResidencyStatus {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface States {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: number; // int32
    }
    export interface TimeAtThisAddress {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface TimeInCountry {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
    export interface Titles {
        Id?: number; // int32
        Name?: string;
        DimGeographyId?: {
        };
    }
}
declare namespace Paths {
    namespace ClientsApiPeopleDropdown {
        namespace Get {
            namespace Responses {
                export type $200 = Definitions.Model0;
            }
        }
    }
}
