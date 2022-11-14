
export interface Datos {
    senderName: string;
    senderCompany: string;
    senderSlogan: string;
    senderTel: string;
    senderSite: string;
    senderEmail: string;
    senderLocation: string;
    clientName: string;
    clientCompany: string;
    proposalShortDescription: string;
    proposalDate: string;
    proposalNumber: string;
    proposalIntroduction: string;
    projectScope: string;
    servicesList: Services[];
    aditionalInformation: string;
}

interface Services {
    type: 'hour' | 'cauntity';
    data: Data[];
}

interface Data {
    service: string;
    [key: string]: string;
    price: string;
    total: string;
}