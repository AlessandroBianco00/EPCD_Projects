-- 1) ORDINI TOTALI

select COUNT(*) as TotalOrders from Orders

-- 2)

select COUNT(*) as TotalCustomers from Customers

-- 3)

select COUNT(*) as LondonCustomers from Customers where (City = 'London') 
-- select City, COUNT(*) as LondonCustomers from Customers where (City = 'London') group by City

-- 4)

select AVG(Freight) as AverageFreight from Orders 

-- 5)

select AVG(Freight) as AverageFreightBOTTM from Orders where (CustomerID = 'BOTTM')
-- select CustomerID, AVG(Freight) as AverageFreightBOTTM from Orders where (CustomerID = 'BOTTM') group by CustomerID

-- 6)

select CustomerID, AVG(Freight) as TotalCustomerFreight from Orders group by CustomerID

-- 7)

select City, COUNT(*) as TotalCustomersBYCity from Customers group by City

-- 8)

select OrderID, (UnitPrice * Quantity) as TotalPrice from [Order Details]

-- 9)

select OrderID, (UnitPrice * Quantity) as TotalPrice from [Order Details] where OrderID = 10248

-- 10)

select CategoryID, COUNT(*) as ProductPerCategory from Products group by CategoryID

-- 11)

select ShipCountry, COUNT(*) as OrdersByCountry from Orders group by ShipCountry

-- 12)

select ShipCountry, AVG(Freight) AverageFreightByCountry from Orders group by ShipCountry