declare global {
    interface Window {
        dataLayer: Record<string, any>[];
        gtag: (...args: any[]) => void;
    }
}
declare const Gtag: {
    install: (gid: string, debug?: boolean) => void;
    pv: (page_title: string, parameters?: Record<string, any>) => void;
    event: (page_title: string, event_name?: string, parameters?: Record<string, any>) => void;
    insert: (gid: string) => void;
    gtag: (...args: any[]) => void;
};
export default Gtag;
