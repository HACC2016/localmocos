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

        var select='SELECT P.id product_id, name, P.description,P.image, "product_info_id",PT.type product_type,"vendor_info_id" ';
        var selectVendorInfo= ',V.id bid, V.dba,V.address1,V.address2,V.business_ph,V.business_description,V.business_ph,V.website,V.email,V.image busimage ';
        var join1='  FROM vendor_infos V LEFT OUTER JOIN "products" P ON P."vendor_info_id"=V.id  ';
        var join2='  LEFT OUTER JOIN product_types PT ON P."product_info_id"=PT.id ';
        var where=" WHERE ";
        var thisWhere;
        var whereValues='';

        where=where.replace('{Search}',searchArray[0]);
        for(var i=0;i<searchArray.length;i++){
          thisWhere=" P.name ILIKE '%" + searchArray[i] +"%' OR P.description ILIKE '%" + searchArray[i] +"%' OR PT.type ILIKE '%" + searchArray[i] +"%' OR V.company_name ILIKE '%" + searchArray[i] +"%' OR V.business_description ILIKE '%" + searchArray[i] +"%' OR V.dba ILIKE '%" + searchArray[i] +"%'";
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
SELECT P.name, P.description, P."productType_id",PT.type,PT.description,"vendorInfo_id",t3.dba FROM "products" t1 JOIN product_types t2 ON P."productType_id"=PT.id JOIN vendor_infos t3 ON P."vendorInfo_id"=t3.id WHERE P.name ILIKE '%Mac%' AND P.description ILIKE '%mac%' AND PT.type ILIKE '%food%';

 */