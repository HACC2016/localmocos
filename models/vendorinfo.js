'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfo = sequelize.define('VendorInfo', {
    user_id: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    company_name: DataTypes.STRING,
    business_reg_num: DataTypes.INTEGER,
    business_description: DataTypes.TEXT,
    dba: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    business_ph: DataTypes.STRING,
    business_ph2: DataTypes.STRING,
    sales_ph: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    tableName: 'vendor_infos',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.VendorInfo.belongsTo(models.User, {
          foreignKey: 'user_id',
          targetKey: 'id'
        });
        models.VendorInfo.hasMany(models.Product, {
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Type, {
          through: models.VendorInfoType,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Market, {
          through: models.VendorInfoMarket,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Certification, {
          through: models.VendorInfoCert,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Service, {
          through: models.VendorInfoService,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsTo(models.Zipcode, {
          foreignKey: 'zip_id',
          targetKey: 'id'
        });
      },
      getVendorCheckboxInfo: function (vendor_id) {
        var getTypeInfos = "SELECT vendor_infos.id, type_id, job, 'type' specific_info FROM vendor_infos JOIN vendor_info_types ON vendor_infos.id=vendor_info_id JOIN types ON types.id=type_id WHERE vendor_infos.id="  + vendor_id;
        var getServiceInfos = "SELECT vendor_infos.id, service_id, service, 'service' specific_info FROM vendor_infos JOIN vendor_info_services ON vendor_infos.id=vendor_info_id JOIN services ON services.id=service_id WHERE vendor_infos.id=" + vendor_id;
        var getMarketInfos = "SELECT vendor_infos.id, market_id, market, 'market' specific_info FROM vendor_infos JOIN vendor_info_markets ON vendor_infos.id=vendor_info_id JOIN markets ON markets.id=market_id WHERE vendor_infos.id=" + vendor_id;
        var getCertificationInfos = "SELECT vendor_infos.id, cert_id, specialty, 'certification' specific_info FROM vendor_infos JOIN vendor_info_certs ON vendor_infos.id=vendor_info_id JOIN certifications ON certifications.id=cert_id WHERE vendor_infos.id=" + vendor_id + ";";
        var union = ' UNION ';

        var checkBoxInfo = sequelize.query(getTypeInfos + union + getServiceInfos + union + getMarketInfos + union + getCertificationInfos, {
          type: sequelize.QueryTypes.SELECT
        });

        return checkBoxInfo;
      }
    }
  });
  return VendorInfo;
};