/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (prop, arr) => {
  return arr.map((obj) => {
    const { [`${prop[0]}`]: _, [`${prop[1]}`]: __, ...rest } = obj;
    return rest;
  });
};
exports.excludeByProperty = (prop, arr) => {
  return arr.filter((e) => {
    return e[`${prop}`] != true;
  });
};
exports.sumDeep = (arr) => {
  return arr.map((item) => {
    const totalVal = item.objects.reduce((acc, obj) => acc + obj.val, 0);
    return { objects: totalVal };
  });
};
exports.applyStatusColor = (colorMap, statuses) => {
  return statuses
    .map(({ status }) => ({
      status,
      color:
        Object.entries(colorMap).find(([color, codes]) =>
          codes.includes(status)
        )?.[0] || 'unknown',
    }))
    .filter(({ color }) => color !== 'unknown');
};
exports.createGreeting = (greet, def) => {
  return (name) => greet(def, name);
};
exports.setDefaults = (defaultProps) => {
  return (props) => {
    return { ...defaultProps, ...props };
  };
};
exports.fetchUserByNameAndUsersCompany = async (name, services) => {
  const { fetchUsers, fetchStatus, fetchCompanyById } = services;
  const users = await fetchUsers();
  const user = users.find((e) => e.name === name);
  const status = await fetchStatus();
  const company = await fetchCompanyById(user.companyId);
  return { company, status, user };
};
