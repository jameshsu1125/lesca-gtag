declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}
declare const Gtag: {
    install: (gid: string) => void;
    pv: (title: string) => void;
    event: (title: string, category?: string) => void;
    insert: (gid: string) => void;
};
export default Gtag;
