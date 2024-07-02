select OrderID, CustomerID, Freight, ShipName, ShipAddress, ShipCity from Orders
where Freight > 90 and Freight < 120