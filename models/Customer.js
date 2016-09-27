/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Customer', {
		CustomerID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		NameStyle: {
			type: 'BIT',
			allowNull: false,
			defaultValue: '((0))'
		},
		Title: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FirstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		MiddleName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Suffix: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CompanyName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SalesPerson: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EmailAddress: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PasswordHash: {
			type: DataTypes.STRING,
			allowNull: false
		},
		PasswordSalt: {
			type: DataTypes.STRING,
			allowNull: false
		},
		rowguid: {
			type: DataTypes.UUID,
			allowNull: false,
			defaultValue: '(newid())',
			primaryKey: true
		},
		ModifiedDate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		}
	}, {
		tableName: 'SalesLT.Customer'
	});
};
