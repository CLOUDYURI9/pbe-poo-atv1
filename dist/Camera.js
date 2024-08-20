"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
class Camera {
    constructor(_qualidade, _material, _marca) {
        this.qualidade = _qualidade;
        this.material = _material;
        this.marca = _marca;
    }
    // METODOS GET E SET
    getQualidade() {
        return this.qualidade;
    }
    setQualidade(_qualidade) {
        this.qualidade = _qualidade;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    //METDOS DIAGRAMA
    gravar() {
        return 'A câmera está gravando...';
    }
    fotografar() {
        return 'A câmera está fotografando...';
    }
}
exports.Camera = Camera;
//# sourceMappingURL=Camera.js.map