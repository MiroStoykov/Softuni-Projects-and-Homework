class WineSelection {

    space;
    wines = [];
    bill = 0;

    constructor(space) {
        this.space = Number(space);
    }

    reserveABottle(wineName, wineType, price) {

        if (this.space < 1) {
            throw new Error("Not enough space in the cellar.");
        }
        this.space--;

        let obj = {
            wineName: wineName,
            wineType: wineType,
            price: Number(price),
            paid: false
        };

        this.wines.push(obj);

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let wine = this.wines.find(e => e.wineName == wineName);
        if (wine == undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        } else if (wine.paid == true) {
            return `${wineName} has already been paid.`;
        } else {
            wine.paid = true;
            this.bill += Number(price);
            return `You bought a ${wineName} for a ${price}$.`;
        }
    }

    openBottle(wineName) {
        let wine = this.wines.find(e => e.wineName == wineName);
        if (wine == undefined) {
            return "The wine, you're looking for, is not found.";
        } else if (wine.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } else if (wine.paid == true) {
            let index = this.wines.indexOf(wine);
            this.wines.splice(index, 1);
            return `You drank a bottle of ${wineName}.`;
        }
    }

    cellarRevision(wineType) {
        if (wineType == undefined) {
            let result = [];
            result.push(`You have space for ${this.space} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            for (const i of this.wines) {
                let paid = ``;
                if (i.paid == false) { paid = `Not Paid` } else { paid = `Has Paid` }
                result.push(`${i.wineName} > ${i.wineType} - ${paid}.`);
            }
            return result.join(`\n`);
        } else {
            let wine = this.wines.find(e => e.wineType == wineType)
            if (wine == undefined) {
                return `There is no ${wineType} in the cellar.`;
            } else {
                let result = [];
                for (const i of this.wines) {
                    if (i.wineType == wineType) {
                        let paid = ``;
                        if (wine.paid == false) { paid = `Not Paid` } else { paid = `Has Paid` };
                        result.push(`${wine.wineName} > ${wine.wineType} - ${paid}.`);
                    }
                }
                return result.join(`\n`);
            }
        }
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));
// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());