/**
 * Clase genérica para manejar sessionStorage de forma flexible.
 * Permite almacenar cualquier tipo de dato usando genéricos.
 */
export class SessionManager<T> {
    private key: string; // Clave única en sessionStorage

    /**
     * Constructor para definir la clave única donde se guardará la información.
     * @param key - Clave para sessionStorage (ej: "authUser", "config", etc.).
     */
    constructor(key: string) {
        this.key = key;
    }

    /**
     * Guarda un valor en sessionStorage.
     * @param data - Datos a almacenar.
     */
    save(data: T): void {
        sessionStorage.setItem(this.key, JSON.stringify(data));
    }

    /**
     * Obtiene los datos almacenados desde sessionStorage.
     * @returns {T | null} - Devuelve los datos o `null` si la clave no existe.
     */
    get(): T | null {
        const item = sessionStorage.getItem(this.key);
        return item ? (JSON.parse(item) as T) : null;
    }

    /**
     * Actualiza los datos almacenados en sessionStorage.
     * Si la clave no existe, lanza un error.
     * @param newData - Datos nuevos a actualizar.
     * @throws {Error} Si no hay datos guardados previamente.
     */
    update(newData: Partial<T>): void {
        const existingData = this.get();
        if (!existingData) {
            throw new Error(`❌ No se encontraron datos en "${this.key}".`);
        }

        // Combinar los datos existentes con los nuevos
        const updatedData = { ...existingData, ...newData };

        // Guardar la actualización
        this.save(updatedData);
    }

    /**
     * Elimina los datos almacenados en sessionStorage.
     */
    remove(): void {
        sessionStorage.removeItem(this.key);
    }

    /**
     * Verifica si hay datos almacenados en sessionStorage.
     * @returns {boolean} `true` si hay datos guardados, `false` si no.
     */
    exists(): boolean {
        return sessionStorage.getItem(this.key) !== null;
    }
}
