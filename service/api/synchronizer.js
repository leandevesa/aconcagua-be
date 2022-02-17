const { sequelize } = require('../../model/driverService');

module.exports = {
    sync: async function (params) {
        if (params.tables) {
            await syncTables(params);
        }
        return `Synchronization ok | Tables: ${params.tables.toString()} | HardReset ${params.hardReset.toString()}`;
    }
};

async function syncTables(params) {

    // Force import to detect all entities for sqlize

    const { Address } = require('../../model/definition/address');
    const { Category } = require('../../model/definition/category');
    const { Product } = require('../../model/definition/product');
    const { ProductPicture } = require('../../model/definition/productPicture');
    const { Region } = require('../../model/definition/region');
    const { Shop } = require('../../model/definition/shop');
    const { State } = require('../../model/definition/state');
    const { Subcategory } = require('../../model/definition/subcategory');
    const { AvailableFilter } = require('../../model/definition/availableFilter');
    const { Track } = require('../../model/definition/track');
    const { Style } = require('../../model/definition/style');
    const { ScrapeExecution } = require('../../model/definition/scrapeExecution');
    const { ShopCategoryRank } = require('../../model/definition/shopCategoryRank');

    const syncParams = params.hardReset ? {
        "force": true
    } : 
    { } ;

    await sequelize.sync(syncParams);
    console.log("All models were synchronized successfully.");
}