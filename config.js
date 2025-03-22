const config = {
    localUse: false,
    event: "24BR",
    API_URL: "https://resultados.bajasaebrasil.net/overlaydata.php",
    getParamsURL() {
        return `evt=${this.event}&order=pos&mode=json`;
    },
    getAPIURL() {
        return `${this.API_URL}?${this.getParamsURL()}`;
    }
};

export default config;