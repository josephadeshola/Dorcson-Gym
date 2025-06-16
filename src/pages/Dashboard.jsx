import { useState } from "react";
import { Button } from "../../src/components/ui/button";
import { Input } from "../../src/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../src/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../src/components/ui/table";
import { Badge } from "../../src/components/ui/badge";
import { Search, Plus, Edit, Trash2, User, Users, Activity, Settings, Filter, Download, MoreHorizontal } from "lucide-react";
import Navigation from "../components/Navigation";

// Mock user data
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    membershipType: "Premium",
    status: "Active",
    joinDate: "2024-01-15",
    lastVisit: "2024-06-14"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    membershipType: "Basic",
    status: "Active",
    joinDate: "2024-02-20",
    lastVisit: "2024-06-13"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@email.com",
    membershipType: "Premium",
    status: "Inactive",
    joinDate: "2023-12-10",
    lastVisit: "2024-05-28"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    membershipType: "VIP",
    status: "Active",
    joinDate: "2024-03-05",
    lastVisit: "2024-06-15"
  },
  {
    id: 5,
    name: "Tom Brown",
    email: "tom.brown@email.com",
    membershipType: "Basic",
    status: "Suspended",
    joinDate: "2024-01-30",
    lastVisit: "2024-06-10"
  }
];

const Dashboard = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-emerald-100";
      case "Inactive":
        return "bg-amber-50 text-amber-700 border-amber-200 shadow-amber-100";
      case "Suspended":
        return "bg-red-50 text-red-700 border-red-200 shadow-red-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 shadow-gray-100";
    }
  };

  const getMembershipColor = (type) => {
    switch (type) {
      case "VIP":
        return "bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-200 shadow-purple-100";
      case "Premium":
        return "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border-blue-200 shadow-blue-100";
      case "Basic":
        return "bg-gradient-to-r from-gray-50 to-slate-50 text-gray-700 border-gray-200 shadow-gray-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 shadow-gray-100";
    }
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <Navigation />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="mb-8 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
              <h1 className="text-4xl font-bold mb-2 animate-fade-in">User Management Dashboard</h1>
              <p className="text-red-100 text-lg animate-fade-in">Manage gym members and their subscriptions with ease</p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live Dashboard</span>
                </div>
                <div className="text-sm text-red-100">Last updated: Just now</div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
                <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {users.length}
                </div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <span className="mr-1">↗</span>
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Active Members</CardTitle>
                <div className="p-2 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                  <Activity className="h-4 w-4 text-emerald-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  {users.filter(user => user.status === "Active").length}
                </div>
                <p className="text-xs text-emerald-600 flex items-center mt-1">
                  <span className="mr-1">●</span>
                  {Math.round((users.filter(user => user.status === "Active").length / users.length) * 100)}% of total
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Premium Members</CardTitle>
                <div className="p-2 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                  <User className="h-4 w-4 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {users.filter(user => user.membershipType === "Premium" || user.membershipType === "VIP").length}
                </div>
                <p className="text-xs text-purple-600 flex items-center mt-1">
                  <span className="mr-1">↗</span>
                  +1 from last week
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-amber-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Revenue</CardTitle>
                <div className="p-2 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors duration-300">
                  <Settings className="h-4 w-4 text-amber-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  $12,450
                </div>
                <p className="text-xs text-amber-600 flex items-center mt-1">
                  <span className="mr-1">↗</span>
                  +15% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* User Management Section */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl text-gray-900">Members</CardTitle>
                  <CardDescription className="text-gray-600 mt-1">
                    Manage your gym members and their memberships
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    className="hover:bg-gray-50 transition-colors duration-300 border-gray-200"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button 
                    variant="outline" 
                    className="hover:bg-gray-50 transition-colors duration-300 border-gray-200"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Member
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Search Bar */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`relative flex-1 transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
                    isSearchFocused ? 'text-red-500' : 'text-gray-400'
                  }`} />
                  <Input
                    placeholder="Search members by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={`pl-10 h-12 border-2 rounded-xl transition-all duration-300 ${
                      isSearchFocused 
                        ? 'border-red-500 shadow-lg shadow-red-100 bg-white' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                  {searchTerm && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                        {filteredUsers.length} results
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Users Table */}
              <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300">
                      <TableHead className="font-semibold text-gray-700">Name</TableHead>
                      <TableHead className="font-semibold text-gray-700">Email</TableHead>
                      <TableHead className="font-semibold text-gray-700">Membership</TableHead>
                      <TableHead className="font-semibold text-gray-700">Status</TableHead>
                      <TableHead className="font-semibold text-gray-700">Join Date</TableHead>
                      <TableHead className="font-semibold text-gray-700">Last Visit</TableHead>
                      <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow 
                        key={user.id}
                        className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white cursor-pointer ${
                          selectedUser === user.id ? 'bg-red-50 border-l-4 border-red-500' : ''
                        }`}
                        onClick={() => setSelectedUser(selectedUser === user.id ? null : user.id)}
                      >
                        <TableCell className="font-medium text-gray-900">{user.name}</TableCell>
                        <TableCell className="text-gray-600">{user.email}</TableCell>
                        <TableCell>
                          <Badge className={`${getMembershipColor(user.membershipType)} border transition-all duration-300 hover:scale-105`}>
                            {user.membershipType}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(user.status)} border transition-all duration-300 hover:scale-105`}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">{user.joinDate}</TableCell>
                        <TableCell className="text-gray-600">{user.lastVisit}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteUser(user.id);
                              }}
                              className="hover:bg-red-50 hover:text-red-600 transition-all duration-300 hover:scale-110"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-gray-50 hover:text-gray-600 transition-all duration-300 hover:scale-110"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">
                    <Users className="h-16 w-16 mx-auto" />
                  </div>
                  <p className="text-gray-500 text-lg">No members found</p>
                  <p className="text-gray-400 text-sm">Try adjusting your search criteria</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
