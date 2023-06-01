declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}
declare const Gtag: {
    install: (gid: string, debug?: boolean) => void;
    pv: (title: string) => void;
    event: (title: string, category?: string, label?: string) => void;
    insert: (gid: string) => void;
    gtag: (...args: any[]) => void;
};
export default Gtag;
