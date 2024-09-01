export interface Experience {
    readonly title: string;
    readonly company: string;
    readonly companyUrl: string;
    readonly description: string;
    readonly start: Date;
    readonly end: Date | null;
}
