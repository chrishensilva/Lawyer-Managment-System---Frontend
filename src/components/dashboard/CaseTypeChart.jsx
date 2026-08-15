import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import API_BASE_URL from "../../config";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626", "#7c3aed"];

export default function CaseTypeChart({ refresh }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Fetching chart data from:", `${API_BASE_URL}/getCaseStats`);
    fetch(`${API_BASE_URL}/getCaseStats`, {
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((result) => {
        console.log("Chart data received:", result);
        setData(Array.isArray(result) ? result : []);
      })
      .catch((err) => {
        console.error("Chart fetch error:", err);
        setData([]);
      });
  }, [refresh]);


  return (
    <div className="graph-box">
      <h3>Court Type Distribution</h3>

      <div style={{ width: '100%', height: '300px' }}>
        {data && data.length > 0 ? (
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={105}
                paddingAngle={3}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} Cases`, 'Count']} />
              <Legend verticalAlign="bottom" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="graph-placeholder">
            <p>{data === null ? "Loading chart..." : "No case data available to display"}</p>
          </div>
        )}
      </div>
    </div>
  );
}
