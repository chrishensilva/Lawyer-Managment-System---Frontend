import { useState, useEffect } from "react";
import API_BASE_URL from "../../config";
import TableSkeleton from "../../components/shared/TableSkeleton";
import "./Table.css";

function ActivityLogs() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");

    const loadLogs = async () => {
        setLoading(true);
        setLoadError("");
        try {
            const res = await fetch(`${API_BASE_URL}/getActivityLogs`, {
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!res.ok) {
                throw new Error(`Failed to load activity logs (${res.status})`);
            }
            const data = await res.json();
            if (Array.isArray(data)) {
                setLogs(data);
            } else {
                throw new Error("Invalid activity log data received");
            }
        } catch (err) {
            console.error(err);
            setLogs([]);
            setLoadError("Unable to load activity records.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadLogs();
    }, []);

    return (
        <div className="main-container fade-in">
            <div className="showdata">
                <div className="btnset1">
                    <h2>Editor Activity Logs</h2>
                    <button className="btn1" onClick={loadLogs}>🔄 Refresh Logs</button>
                </div>

                <div className="table-container">
                    <table className="styled-table" aria-busy={loading}>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Action</th>
                                <th>Details</th>
                                <th>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? <TableSkeleton columns={4} /> : logs.map((log) => (
                                <tr key={log.id}>
                                    <td style={{ fontWeight: 'bold', color: log.username === 'admin' ? '#007bff' : '#28a745', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <img
                                            src={log.avatar_url || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Ccircle cx='15' cy='15' r='15' fill='%23ccc'/%3E%3C/svg%3E"}
                                            alt="Avatar"
                                            style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                        {log.username}
                                    </td>
                                    <td>{log.action}</td>
                                    <td>{log.details}</td>
                                    <td>{new Date(log.timestamp).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {loadError && <p className="error-msg">{loadError}</p>}
                {logs.length === 0 && !loading && !loadError && (
                    <p className="no-data">No records found.</p>
                )}
            </div>
        </div>
    );
}

export default ActivityLogs;
