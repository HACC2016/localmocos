'use strict';
module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define('Type', {
    job: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'types',
    classMethods: {
      associate: function(models) {
        models.Type.belongsToMany(models.VendorInfo, {
          through: models.VendorInfoType,
          foreignKey: 'type_id'
        });
      },
      searchResults: function(searchString) {
        var searchArray=searchString.split(' ');

        var select='SELECT name, t1.description,t1.image, "product_info_id",t2.type product_type,"vendor_info_id" ';
        var selectVendorInfo= ',t3.id bid, t3.dba,t3.address1,t3.address2,t3.business_ph,t3.business_ph,t3.website,t3.email,t3.image busimage ';
        var join1=' FROM "products" t1 JOIN product_types t2 ON t1."product_info_id"=t2.id ';
        var join2=' JOIN vendor_infos t3 ON t1."vendor_info_id"=t3.id ';
        var where=" WHERE ";
        var thisWhere;
        var whereValues='';

        where=where.replace('{Search}',searchArray[0]);
        for(var i=0;i<searchArray.length;i++){
          thisWhere=" t1.name ILIKE '%" + searchArray[i] +"%' OR t1.description ILIKE '%" + searchArray[i] +"%' OR t2.type ILIKE '%" + searchArray[i] +"%'";
          whereValues+=(i==0?'':' OR ' ) + thisWhere;
        }

        console.log(select + selectVendorInfo + join1 + join2 + where+  whereValues);

        var searchResultData=sequelize.query(select + selectVendorInfo + join1 + join2 + where+  whereValues, {
          type: sequelize.QueryTypes.SELECT
        });

        /** Please push up **/
        return searchResultData;
      }
    }
  });
  return Type;
};

/*
SELECT t1.name, t1.description, t1."productType_id",t2.type,t2.description,"vendorInfo_id",t3.dba FROM "products" t1 JOIN product_types t2 ON t1."productType_id"=t2.id JOIN vendor_infos t3 ON t1."vendorInfo_id"=t3.id WHERE t1.name ILIKE '%Mac%' AND t1.description ILIKE '%mac%' AND t2.type ILIKE '%food%';

 */